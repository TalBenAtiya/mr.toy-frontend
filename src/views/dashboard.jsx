import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../cmps/loader';
import { HiBackspace } from "react-icons/hi"
import { utilService } from '../services/util-service';
import { loadToys } from '../store/actions/toy.action';

ChartJS.register(ArcElement, Tooltip, Legend)

export const Dashboard = () => {
    const navigate = useNavigate()
    const [avgs, setAvgs] = useState()

    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()
    const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered", "Baby", "Stragitics"]


    useEffect(() => {
        dispatch(loadToys())
        if (toys) {
            getAvgs()
        }
    }, [])


    const getAvgs = () => {
        const labelsAvgs = labels.map(label => utilService.getLabelAvgPrice(label, toys))
        setAvgs(labelsAvgs)
    }

    const data = {
        labels,
        datasets: [
            {
                label: '# of Votes',
                data: avgs,
                backgroundColor: [
                    "#00bfa0",
                    "#b3d4ff",
                    "#dc0ab4",
                    "#ffa300",
                    "#9b19f5",
                    "#e6d800",
                    "#0dd4ff",
                    "#e60049"
                ],
                borderColor: [
                    "#00bfa0",
                    "#b3d4ff",
                    "#dc0ab4",
                    "#ffa300",
                    "#9b19f5",
                    "#e6d800",
                    "#0dd4ff",
                    "#e60049"
                ],
                borderWidth: 1,
            },
        ],
    }

    const onGoBack = () => {
        navigate('/toys')
    }

    if (isLoading) return <Loader />
    return <section className="dashboard main-layout">
        <button onClick={onGoBack} className="back"><HiBackspace /></button>
        <h1>Average Price Per Label</h1>
        <div style={{ width: "30%", margin: "auto" }}><Doughnut data={data} /></div>
    </section>
}