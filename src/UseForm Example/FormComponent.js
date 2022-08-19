import { useForm } from "react-hook-form";
const FormComponent=()=>{
    const {register,handleSubmit}=useForm()
    const onSubmit = data => console.log(data);
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' {...register('username',{
            required:true,
            minLength:7,
            maxLength:10
          })}></input>
          <input type='submit'></input>
          </form>
        </div>
    )
}
export default FormComponent