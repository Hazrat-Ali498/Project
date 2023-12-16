import Card from "react-bootstrap/Card";
import img10 from "../Images/adminLogo.png";

function Header() {
  return (
    <div class="card text-center">
      <div class="card-body">
        <div class="text-center">
            <img src={img10} style={{width:"5%"}}/>
            <h5 class="card-title">Administrator</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
