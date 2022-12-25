export const Logo = ({size}:{size:string})=>(
    <div className="logo">
        <img src={require("../../assets/images/logo.png")} alt="" height={size} style={{aspectRatio: "16 / 9"}}/>
    </div>
)