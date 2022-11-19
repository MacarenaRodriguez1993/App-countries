import React ,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import '../CreateActivity/createActivity.css'
import {createActivity} from '../../../redux/actions/activities';
import {Link} from 'react-router-dom';
import FormCardCountry from "../../FormCardCountry/FormCardCountry";



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
            //   picture: "",
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

    const handleInput=(event)=>{
        setFormActivity({
            ...formActivity,
            [event.target.name]:event.target.value
        })
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
                    placeholder="ex: senderismo" 
                    maxLength={25} 
                    onChange={(event)=>handleInput(event)}
                />

                <label>Difficult </label>
                <input 
                    id='difficult'
                    type='range' 
                    min={1} 
                    max={5} 
                    step={1} 
                    defaultValue={0}
                    onChange={(event)=>
                        setFormActivity({
                            ...formActivity,
                            difficult:parseInt(event.target.value)
                        })
                    }
                />

                <label>Duration  </label>
                <input 
                    id='duration'
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
                <select 
                    id='season'
                    onChange={(event)=>
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
                <select 
                    id='countries'
                    name='countries'  
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