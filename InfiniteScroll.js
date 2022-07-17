import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// state for enable fetch more 
  const [hasMoreProduct, setHasMoreProduct] = useState(true);

// fetch more handler  
 const fetchMoreProductsHandler = async () => {
    let refetchEndCursor =
      allProductFromServerSideState?.data?.products?.pageInfo?.endCursor;

    let { data: allProductsFromClientSide } =
      await useSearchProductOnServerSide(refetchEndCursor, 1);

    if (allProductsFromClientSide?.data?.products?.edges.length <= 0) {
      setHasMoreProduct(false);
    } else {
      let newEdges = allProductsFromClientSide?.data?.products?.edges;

      let newPageInfo = allProductsFromClientSide?.data?.products?.pageInfo;

      setAllProductFromServerSideState((prevState) => {
        return {
          data: {
            products: {
              edges: [...prevState?.data?.products?.edges, ...newEdges],
              pageInfo: newPageInfo,
            },
          },
          loading: allProductsFromClientSide.loading,
          networkStatus: allProductsFromClientSide.networkStatus,
        };
      });
    }
  };


// InfiniteScroll component 
  <InfiniteScroll
              className={styles.productInfiniteScroll}
              dataLength={allProducts?.data?.products?.edges.length}
              // next={fetchMoreProductsHandler}
              hasMore={hasMoreProduct}
              scrollThreshold={0.8}
              loader={
                <Typography
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    marginTop: "20px",
                  }}
                >
                  <CircularProgress
                    disableShrink
                    size={30}
                    sx={{ color: "palegreen" }}
                  />
                </Typography>
              }
              endMessage={
                <Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      paddingTop: "20px",
                      marginTop: "30px",
                    }}
                  >
                    You Already Seen All Products
                  </Typography>
                </Box>
              }
            >
              <Grid container rowSpacing={3} columnSpacing={3}>
                {allProducts?.data?.products?.edges.map((product) => {
                  return (
                    <Grid
                      item
                      key={product?.node?.id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className={styles.products_responsive_coantainer}
                    >
                      <Product
                        product={product}
                        wishList={wishList}
                        cartList={cartList}
                      />
                    </Grid>
                  );
                })}
              </Grid>
 </InfiniteScroll>
