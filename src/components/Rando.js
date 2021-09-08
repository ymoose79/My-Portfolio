import React from 'react';
import {useForm} from 'react-hook-form';

export default function Rando() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name input */}
                <input
                    type="text"
                    placeholder='Name'
                            name='name'
                            {...register('name', {required: true})}
                            />

                            <input
                    type="text"
                    className="form-control"
                    placeholder='email'
                            name='email'
                            {...register('email', {required: true})}
                            
                            />

                            <input
                    type="text"
                    className="form-control"
                    placeholder='body'
                            name='body'
                            {...register('body', {required: true})}

            />
            
            <input type="submit"/>
            </form>
    )
}







