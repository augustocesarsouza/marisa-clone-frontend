import { useDispatch } from 'react-redux';
import { ProductArrayAppDispatch } from './productArrayStore';

export const useProductArrayAppDispatch = () => useDispatch<ProductArrayAppDispatch>();
