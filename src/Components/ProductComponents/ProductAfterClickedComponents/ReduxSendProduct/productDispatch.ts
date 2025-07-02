import { useDispatch } from 'react-redux';
import { ProductAppDispatch } from './productStore';

export const useProductAppDispatch = () => useDispatch<ProductAppDispatch>();
