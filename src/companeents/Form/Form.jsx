import React from 'react';
import './form.css'

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [subject, setSubject] = React.useState('');
    
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }
    
    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type={'text'} placeholder={'Страна'} value={country} onChange={onChangeCountry} />
            <input className={'input'} type={'text'} placeholder={'улица'} value={street} onChange={onChangeStreet} />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'legal'}>Юр. лицо</option>
                <option value={'legal'}>Физ. лицо</option>
            </select>
        </div>
    );
};

export default Form;