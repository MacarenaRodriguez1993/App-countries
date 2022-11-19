import React ,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import '../CreateActivity/createActivity.css'
import {createActivity} from '../../../redux/actions/activities';
import {Link} from 'react-router-dom';
import FormCardCountry from "../../FormCardCountry/FormCardCountry";



const CreateActivity = ()=>{

    const allCountries = useSelector((state)=>state.allCountries);
    const dispatch = useDispatch();
    const [formActivity,setFormActivity] = useState({
        name:'',
        difficult:0,
        duration:'',
        season:'',
        countries:[]
    });

    const validationForm = (formActivity)=>{
        let errors ={};
        let regExp=/[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s]/
            if(!formActivity.name.trim()){
                errors.name = 'The Name field is required'
            }else if(!regExp.test(formActivity.name.trim())){
                errors.name = 'The name field does not receive special characters'
            }

            if(parseInt(formActivity.difficult)===0){
                errors.difficult = 'The difficulty must be from 1 to 5'
            }

            if(!formActivity.duration){
                errors.duration = 'The duration field is required'
            }

            if( formActivity.season===''){
               errors.season= 'You must enter a station'
            }else if( formActivity.season==='Select Season'){
                errors.season= 'You must enter a station'
             }

        return errors;
    }

    const handleChange = (e)=>{
        const{name,value}=e.target;
        setFormActivity({
            ...formActivity,
            [name]:value
        })
    }
    const [error, setError] = useState({});
    const handlerBlur = (e)=>{
        handleChange(e);
        setError(validationForm(formActivity))
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(createActivity(formActivity))
        alert(`Activity "${formActivity.name}" successfully created!`)
        event.target.reset();
        setFormActivity({
            countries:[]
        });
        document.getElementById("countries").selectedIndex = 0;
    }
    const handlerClear=()=>{
        setFormActivity({
            name: "",
            difficult: 0,
            duration: "",
            season: "",
            countries: [],
          });
          document.getElementById('name').value=''
          document.getElementById("difficult").value = 0;
          document.getElementById("duration").value = '';
          document.getElementById("season").selectedIndex = 0;
          document.getElementById("countries").selectedIndex = 0;
    }
    
    const handleCountries = (event)=>{
        if(!formActivity.countries?.includes(event.target.value)){
            setFormActivity({
                ...formActivity,
                countries:[...formActivity.countries,event.target.value]
            })
        }
    }

    return(
        <div className="home">
            <h3 className="titleActivities">Create Activity for countries</h3>
            <Link to='/home'><button className="buttonBack"> ← GO HOME</button></Link>
            <form id='formActivity' onSubmit={(event)=> onSubmit(event)}>
                <label>Activity name </label>
                <input 
                    id='name'
                    type='text' 
                    name='name' 
                    value={formActivity.name}
                    placeholder="ex: senderismo" 
                    maxLength={25} 
                    onChange={(event)=>handleChange(event)}
                    onBlur={handlerBlur}
                    required
                />
                <div className="msjError" >
                   {
                    error.name && <p>{error.name}</p>
                   }
                </div>

                <label>Difficult </label>
                <input 
                    id='difficult'
                    type='range' 
                    name='difficult' 
                    value={formActivity.difficult}
                    min={1} 
                    max={5} 
                    step={1} 
                    defaultValue={0}
                    onBlur={handlerBlur}
                    onChange={handleChange}
                />
                <div className="msjError" >
                   {
                    error.difficult && <p>{error.difficult}</p>
                   }
                </div>

                <label>Duration </label>
                <input 
                    id='duration'
                    type='text' 
                    name='duration'
                    placeholder="ex: 1 hours" 
                    value={formActivity.duration}
                    onBlur={handlerBlur}
                    onChange={handleChange}
                />
                <div className="msjError" >
                   {
                    error.duration && <p>{error.duration}</p>
                   }
                </div>

                <label>Season  </label>
                <select 
                    id='season'
                    name="season"
                    value={formActivity.season}
                    onBlur={handlerBlur}
                    onChange={handleChange}>
                    <option value="Select Season">Select Season</option>
                    <option value='summer'>Summer</option>
                    <option value='autumn'>Autumn</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                </select> 
                <div className="msjError" >
                   {
                    error.season && <p>{error.season}</p>
                   }
                </div>
                
                <label>Add Countries</label>
                <select 
                    id='countries'
                    name='countries'  
                    value={formActivity.countries}
                    onChange={(event)=>handleCountries(event)}>
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
                    <button type="submit"className="buttonSubmit" >Submit</button>   
                    <button type="button" className="buttonClear" onClick={handlerClear}>clear</button>   
                </div>
            </form>

            <div>
                {
                    allCountries?.filter((country)=> formActivity.countries.includes(country.id))
                        .map(country=>{
                            return(
                                <FormCardCountry
                                    key={country.id}
                                    id={country.id}
                                    name={country.name}
                                    image={country.flagImage}
                                    state={formActivity}
                                    setState={setFormActivity}
                                />
                            )
                        })
                }
            </div>

        </div>
    );
}

export default CreateActivity;