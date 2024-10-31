import axios from 'axios';
import Mission from '../types/Mission';
import MissionDto from '../types/MissionDto';

const  ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY
const  BASE_URL = `https://reactexambackend.onrender.com/missions/${ACCESS_KEY}`

export const fetchMissions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching missions:', error);
        throw new Error(`Error fetching mission: ${error}`);
    }
}

export const fetchMission = async (MissionId: string): Promise<Mission[]> => {

    try {
        const response = await axios.get(`${BASE_URL}${MissionId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching mission:', error);
        throw new Error(`Error fetching mission: ${error}`);
    }

}

export const addMission = async (mission: MissionDto) => {
    try {

        const response = await axios.post(`${BASE_URL}`, mission);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error adding mission:', error);
        throw new Error(`Error adding mission: ${error}`);
    }
}

export const updateMission = async (missionId: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/progress/${missionId}`,);
        return response.data;
    } catch (error) {
        console.error('Error updating mission:', error);
        throw new Error(`Error updating mission: ${error}`);
    }
}

export const deleteMission = async (missionId: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${missionId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting mission:', error);
        throw new Error(`Error deleting mission: ${error}`);
    }
}