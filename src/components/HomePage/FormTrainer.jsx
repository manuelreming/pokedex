import React from 'react'
import{setTrainer} from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/FormTrainer.css'
const FormTrainer = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
const trainerInput  = useRef()
    const handleSubmit = e =>{
     e.preventDefault()
     dispatch(setTrainer(trainerInput.current.value.trim()))
     trainerInput.current.value = ""
     navigate('/pokedex')


         
    }
  return (
    <form className='form-trainer' onSubmit={handleSubmit}>
        <input placeholder = 'Tu nombre...' className='form-trainer__input' ref={trainerInput} type="text" />
        <button className='form-trainer__button'>Comenzar</button>
    </form>
  )
}

export default FormTrainer
