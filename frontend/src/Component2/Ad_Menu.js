import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Ad_Menu(props) {
  return (
    <div className="container=-fluid">
      <div className="row flex-nowrap">
        <div
          className="bg-dark col-auto col-md-2"
          style={{ width: "100%", height: "100vh" }}
        >
          <div className="bg-dark p-2">
            <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
              <span className="fs-4 d-none d-sm-inline">Sidemenu</span>
            </a>
            <ul className="nav nav-pills flex-column mt-4">
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-guage"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>

              <li className="nav-item py-2 py-sm-0 dropdown ">
                <a
                  href="#"
                  className="nav-link text-white dropdown-toggle"
                  id="productsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-5 fa fa-table-list"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Products</span>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="productsDropdown"style={{width:"100%",backgroundColor:"#dbd1d1", cursor: "pointer"}}
                >
                  <li>
                    <a className="dropdown-item nav-link text-black"  onClick={() => props.select("Add Product")}>
                      Add Product
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item nav-link text-black"  onClick={() => props.select("Update Product")}>
                      Customer Details
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item nav-link text-black" onClick={() => props.select("View Product")} >
                      View Product
                    </a>
                  </li>

                  {/* <li>
                    <a className="dropdown-item nav-link text-black" onClick={() => props.select("Delete Product")}>
                      Delete Product
                    </a>
                  </li> */}
                  
                  {/* Add more submenu items as needed */}
                </ul>
              </li>

              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-clipboard"></i>
                  <span className="fs-4 d-none ms-3 d-sm-inline" onClick={()=> props.select("Order")}>Orders</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-users"></i>
                  <span className="fs-4 d-none ms-3 d-sm-inline" onClick={()=> props.select("Customer")}>
                    Customers
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ad_Menu;

