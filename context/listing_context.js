import React, { createContext, useContext, useEffect, useState } from 'react'

const ListingContext = createContext()
export const ListingProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        filterAvailability : 'all',
        filterReviews : '',
        filterSupport : '',
        filterPricing : {
            flat:false,
            flatMax:'',
            hourly:false,
            hourlyMax:'',
            custom:false
        },
        filterPlan : '',
        filterUsage : '',
        filterYearsInBusiness : '',
        filterEmployeeStrength : 'all',
        filterPayment : '',
    })
    
    return (
        <ListingContext.Provider value={{filters, setFilters}}>{children}</ListingContext.Provider>
    )
}

export const useListingContext = () => {
    return useContext(ListingContext)
  }