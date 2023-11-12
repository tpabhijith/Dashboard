"use client"
import { usePostStore } from '../../../store/Posts'
import CircularJSON from 'circular-json';

export const getServerSideProps = async (context) => {
  // Load data from localStorage
  const storedDashboards = CircularJSON.parse(localStorage.getItem('dashboards')) || [];

  // Initialize the store with the loaded data
  usePostStore.getState().initialize(storedDashboards);

  return {
    props: {}, // You can pass additional props here if needed
  };
};
