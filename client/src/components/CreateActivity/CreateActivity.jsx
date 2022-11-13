import React ,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import '../CreateActivity/createActivity.css'
import {createActivity} from '../../redux/actions/activities';
import {Link} from 'react-router-dom'
//import { useNavigate } from "react-router-dom";


const CreateActivity = ()=>{

    const allCountries = useSelector((state)=>state.allCountries);
    const [formActivity,setFormActivity] = useState({
        name:'',
        difficult:0,
        duration:'',
        season:'',
        countries:[]
    });
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(createActivity(formActivity))
        alert(`Activity "${formActivity.name}" successfully created!`)
        event.target.reset();
        
    }
    
    const handleCountries = (event)=>{
        if(!formActivity.countries?.includes(event.target.value)){
            setFormActivity({
                ...formActivity,
                countries:[...formActivity.countries,event.target.value]
            })
        }
    }

    const handleInput=(event)=>{
        setFormActivity({
            ...formActivity,
            [event.target.name]:event.target.value
        })
    }

    return(
        <>
            <h1 className="titleForm">Create Activity for countries</h1>
            <Link to='/home'><button>GO HOME</button></Link>
            <form id='formActivity' onSubmit={(event)=> onSubmit(event)}>
                <label>Activity name </label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder="ex: senderismo" 
                    maxLength={25} 
                    onChange={(event)=>handleInput(event)}
                />

                <label>Difficult </label>
                <input 
                    type='range' 
                    min={1} 
                    max={5} 
                    step={1} 
                    onChange={(event)=>
                        setFormActivity({
                            ...formActivity,
                            difficult:parseInt(event.target.value)
                        })
                    }
                />

                <label>Duration  </label>
                <input 
                    type='text' 
                    placeholder="ex: 1 hours" 
                    onChange={(event)=>
                        setFormActivity({
                            ...formActivity,
                            duration:event.target.value
                        })
                    }
                />

                <label>Season  </label>
                <select onChange={(event)=>
                        setFormActivity({
                            ...formActivity,
                            season:event.target.value
                        })
                        
                    }>
                    <option value="Select Season">Select Season</option>
                    <option value='summer'>Summer</option>
                    <option value='autumn'>Autumn</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                </select> 

                
                <label>Add Countries</label>
                <select name='countries'  onChange={(event)=>handleCountries(event)}>
                    <option value="">Select country</option>
                    {
                        allCountries?.sort((a,b)=>(a.name<b.name ? -1 :1))
                            .map((country)=>{
                                return(
                                    <option key={country.id} value={country.id}>{country.name}</option>
                                )
                            })
                    }
                </select>
               
                <div className="button">
                    <button type="submit">Submit</button>   
                </div>
                
          
      
            </form>
        </>
    );
}

export default CreateActivity;