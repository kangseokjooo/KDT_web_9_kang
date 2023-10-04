import {useForm} from 'react-hook-form'

export default function FormPracI(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onValid=(data)=>{
        console.log('onValid',data)
    }
    const validateAge=(value)=>{
        const age = parseInt(value, 10);
    if (isNaN(age) || age < 0) {
        return '나이는 0 이상의 숫자만 입력할 수 있습니다.';
    }
        return true;
    }
    console.log(errors)
    return(
        <>
            <form onSubmit={handleSubmit(onValid)}>
                이름:<input type='text'{...register('name',{required:'이름항목은 필수입니다.'})}/>
                {errors.name?.message}
                <br/>
                나이:<input type='text' {...register('age',{validate:validateAge})}/>
                {errors.age?.message}
                <br/>
                <button type='submit'>제출</button>
            </form>
        </>
    )
}