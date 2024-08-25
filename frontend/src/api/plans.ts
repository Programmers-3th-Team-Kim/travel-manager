import axios from 'axios'

import { Plan } from '@/models/plan.model'

const BASE_URL: string =
  import.meta.env.VITE_BE_BASE_URL || 'http://localhost:3333'

export const fetchPlans = async (): Promise<Plan[]> => {
  try {
    const response = await axios.get<Plan[]>(`${BASE_URL}/plans`)
    return response.data
  } catch (error) {
    console.error('Error fetching plans:', error)
    return []
  }
}
