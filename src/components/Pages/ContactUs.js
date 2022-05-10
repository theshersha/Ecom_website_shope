import { Fragment,useRef } from "react";


import './ContactUs.css';

const ContactUs = props =>{
    const NameRef = useRef('');
    const EmailRef = useRef('');
    const NumberRef = useRef('');

    const formSubmitHandler = (event) =>{
        event.preventDefault();

        const data = {
            name:NameRef.current.value,
            email:EmailRef.current.value,
            number:NumberRef.current.value
        }
        NameRef.current.value = '';
        EmailRef.current.value= '';
        NumberRef.current.value= '';
        props.onAddData(data);

    }

    


    return(
        <Fragment>
            <section className="contactsection">
            <h1 > Contact Us</h1>
            <div className="container">
                <form onSubmit={formSubmitHandler}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your  name.." ref={NameRef}/>
                <label htmlFor="email">Email id</label>
                <input type="text" id="email" name="emailid" placeholder="Your Last name.." ref={EmailRef}/>
                <label htmlFor="fnum">Mobile Number</label>
                <input type="text" id="fnum" name="fonenumber" placeholder="Your number.." ref={NumberRef}/>
                <input type="submit" value="Submit"></input>
                </form>

            </div>

            </section>
            
        </Fragment>
    

    );

};

export default ContactUs;
