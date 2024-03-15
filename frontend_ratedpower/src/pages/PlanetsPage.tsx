import React, { useContext } from 'react'
import PlanetsTable from '../components/PlanetsTable'
import "../assets/css/planets.css"
import Pagination from '../components/Pagination';
import { DataContext } from '../context/DataContext';
import ModalError from '../components/ModalError';
import { DataContextValue } from '../interfaces/DataContext';

function PlanetsPage() {
    const { isError, setIsError, msgError, setMsgError } = useContext<DataContextValue>(DataContext);

    return (
        <>
            <div className="planets__section">
                <div className='planets__title'>Planets</div>
                <PlanetsTable />
                <Pagination />
            </div>
            <ModalError
                isOpen={isError}
                msg={msgError}
                setIsOpen={setIsError}
                setMsgError={setMsgError} 
            />
        </>
    )
}

export default PlanetsPage;