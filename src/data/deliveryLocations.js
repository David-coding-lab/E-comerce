export const FREE_SHIPPING_THRESHOLD = 140

export const deliveryLocations = [
  {
    id: 'lagos-ng',
    label: 'Lagos, Nigeria',
    city: 'Lagos',
    country: 'Nigeria',
    shipping: 10,
    taxRate: 0.075,
    taxLabel: '7.5%',
    eta: '2-4 business days',
  },
  {
    id: 'accra-gh',
    label: 'Accra, Ghana',
    city: 'Accra',
    country: 'Ghana',
    shipping: 15,
    taxRate: 0.05,
    taxLabel: '5%',
    eta: '3-5 business days',
  },
  {
    id: 'nairobi-ke',
    label: 'Nairobi, Kenya',
    city: 'Nairobi',
    country: 'Kenya',
    shipping: 18,
    taxRate: 0.06,
    taxLabel: '6%',
    eta: '3-5 business days',
  },
  {
    id: 'johannesburg-za',
    label: 'Johannesburg, South Africa',
    city: 'Johannesburg',
    country: 'South Africa',
    shipping: 20,
    taxRate: 0.05,
    taxLabel: '5%',
    eta: '4-6 business days',
  },
  {
    id: 'new-york-us',
    label: 'New York, United States',
    city: 'New York',
    country: 'United States',
    shipping: 12,
    taxRate: 0.08875,
    taxLabel: '8.875%',
    eta: '3-5 business days',
  },
  {
    id: 'london-uk',
    label: 'London, United Kingdom',
    city: 'London',
    country: 'United Kingdom',
    shipping: 16,
    taxRate: 0.2,
    taxLabel: '20%',
    eta: '2-5 business days',
  },
  {
    id: 'toronto-ca',
    label: 'Toronto, Canada',
    city: 'Toronto',
    country: 'Canada',
    shipping: 18,
    taxRate: 0.13,
    taxLabel: '13%',
    eta: '4-6 business days',
  },
  {
    id: 'sydney-au',
    label: 'Sydney, Australia',
    city: 'Sydney',
    country: 'Australia',
    shipping: 22,
    taxRate: 0.1,
    taxLabel: '10%',
    eta: '5-7 business days',
  },
  {
    id: 'dubai-ae',
    label: 'Dubai, United Arab Emirates',
    city: 'Dubai',
    country: 'United Arab Emirates',
    shipping: 20,
    taxRate: 0.05,
    taxLabel: '5%',
    eta: '4-6 business days',
  },
]

export function getDeliveryLocation(id) {
  return (
    deliveryLocations.find((location) => location.id === id) ??
    deliveryLocations[0]
  )
}
