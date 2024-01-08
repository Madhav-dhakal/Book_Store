export const ButtonComponent =({label='submit',className="btn-success",type="submit"})=>{
     return(
          <>
          <button type={type} className={`btn btn-sm${className}`} >
               {
                    (type==='reset')?<i className="fa fa-undo"></i>:
                    ((type==="submit")?<i className="fa fa-paper-plane"></i> : "")
               }
               {label}
          </button>
          </>
     )
} 