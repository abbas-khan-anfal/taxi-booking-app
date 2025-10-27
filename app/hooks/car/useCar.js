'use client';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function useCar() {

    const [name, setName] = useState("");
    const [seats, setSeats] = useState("");
    const [price, setPrice] = useState("");
    const [cars, setCars] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(true);

  const addCarHandler = async (url, formData, e) => {
    try
    {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        if(response.data.success)
        {
            toast.success(response.data.message);
            setName("");
            setSeats("");
            setPrice("");
            e.target.file.value = null;
        }
        else
        {
            toast.error(response.data.message || "Couldn't add car");
        }
    }
    catch (error)
    {
      toast.error(error?.response?.data?.message || error?.message || "Couldn't add car");
    }
  }

  const fetchCarsHandler = async (url) => {
    setFetchLoading(true);
    try
    {
        const response = await axios.get(url, {
            withCredentials: true,
        });
        if(response.data.success)
        {
            setCars(response.data.cars || []);
        }
        else
        {
            toast.error(response.data.message || "Something went wrong");
        }
    }
    catch (error)
    {
      toast.error(error?.response?.data?.message || error?.message || "Something went wrong");
    }
    finally
    {
        setFetchLoading(false);
    }
  }

  const deleteCarHandler = async (url) => {
    try
    {
        const response = await axios.delete(url, {
            withCredentials: true,
        });
        if(response.data.success)
        {
            toast.success(response.data.message || "Car deleted successfully");
            fetchCarsHandler("/api/cars/fetch");
        }
    }
    catch (error)
    {
      toast.error(error?.response?.data?.message || error?.message || "Something went wrong");
    }
  }

  return {
    addCarHandler,
    name,
    setName,
    seats,
    setSeats,
    price,
    setPrice,
    fetchCarsHandler,
    cars,
    fetchLoading,
    deleteCarHandler
  };

}

export default useCar;