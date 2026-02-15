import axiosInstance from "../../api/axios";
export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });
export const setProductList = (products) => ({ type: 'SET_PRODUCT_LIST', payload: products });
export const setTotal = (total) => ({ type: 'SET_TOTAL', payload: total });
export const setFetchState = (fetchState) => ({ type: 'SET_FETCH_STATE', payload: fetchState });
export const setLimit = (limit) => ({ type: 'SET_LIMIT', payload: limit });
export const setOffset = (offset) => ({ type: 'SET_OFFSET', payload: offset });
export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });
export const setProduct = (product) => ({ type: 'SET_PRODUCT', payload: product });
export const ADD_PRODUCT_LIST = (products) => ({ type: 'ADD_PRODUCT_LIST', payload: products });


export const fetchCategories = () => (dispatch) => {
  return axiosInstance
    .get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
    })
    .catch((err) => {
      console.error("Kategoriler yüklenirken hata oluştu:", err);
    });
};


export const fetchProducts = (category = null, filter = '', sort = '', limit = 25, offset = 0) => (dispatch) => {
  dispatch(setFetchState('FETCHING'));

  const queryParams = new URLSearchParams();
  
  if (category) queryParams.append('category', category);
  if (filter) queryParams.append('filter', filter);
  if (sort) queryParams.append('sort', sort);
  
  queryParams.append('limit', limit);
  queryParams.append('offset', offset);

  const queryString = queryParams.toString();
  const url = `/products?${queryString}`;

  return axiosInstance
    .get(url)
    .then((res) => {
      dispatch(setTotal(res.data.total));
      
      if (offset > 0) {
        dispatch({ type: 'ADD_PRODUCT_LIST', payload: res.data.products });
      } else {
        dispatch(setProductList(res.data.products));
      }
      
      dispatch(setFetchState('FETCHED'));
    })
    .catch((err) => {
      console.error("Ürünler yüklenirken hata oluştu:", err);
      dispatch(setFetchState('FAILED'));
    });
};


export const fetchProductDetail = (productId) => (dispatch) => {
 
  dispatch(setFetchState('FETCHING'));

  return axiosInstance
    .get(`/products/${productId}`)
    .then((res) => {
      
      dispatch(setProduct(res.data));
      dispatch(setFetchState('FETCHED'));
    })
    .catch((err) => {
      console.error("Ürün detayı çekilirken hata oluştu:", err);
      dispatch(setFetchState('FAILED'));
    });
};