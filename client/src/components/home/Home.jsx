
import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../home/home.css'
import Country from '../../components/country/Country'
import{connect} from 'react-redux';
import {getAllCountries} from '../../redux/actions/countries'

export class Home extends Component{

    componentDidMount() {
        this.props.getAllCountriesBy();
    }
    render(){ 

        return( 
            <div className="home">
                <Link to='/'>
                    <button> Back</button>
                </Link>
                <div className="countryCard">
                    {
                        this.props.allCountries?.map((country)=> {
                            return(
                                
                                <Country
                                    key={country.id}
                                    name={country.name}
                                    image={country.flagImage}
                                    continent={country.continent}
                                />
                            )                
                        })
                    }
                </div>
            
            </div>
        );
    }
}
export const mapStateToProps = (state) =>{
    return{
        allCountries: state.allCountries,
    }
  }
  
  export const mapDispatchToProps = (dispatch)=>{
    return{
      getAllCountriesBy : ()=> dispatch(getAllCountries())
    }
    
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
