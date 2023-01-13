import React from "react";
import  {useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import Card from "../Cards/Cards";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar.jsx";

function Home({onLogin, user}) {
  const navigate = useNavigate();

  useEffect(() => {
    // check current user session cookie
    fetch("/me").then(res => {
        if (res.ok) {
            res.json().then(user => onLogin(user))
        }
    })
}, [])

if (!user) return navigate("/login");
  return (
    <>
      <NavBar />
      <div class="container mx-auto mt-4">
      <h3 className='dash-welcome'>Welcome, <span className='dash-user'>
        {user ? user.first_name : ""}
        </span></h3>
        <div class="row">
          <div class="cardc col-md-4">
            <div class="card">
              <img
                src="https://media.istockphoto.com/id/1339854693/photo/pumpkin-filled-ravioli-pasta-above-table-scene-on-a-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=jKphpHmNNsYr6BGny3WZ722oG2PKPNVy15JysojMQS8="
                height={300}
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <button className="btn btn-danger btn-block">Main Meals</button>
            </div>
          </div>

          <div class="cardc col-md-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                height={300}
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <button type="button" className="btn btn-danger">
                Drinks
              </button>
            </div>
          </div>
          <div class="cardc col-md-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                height={300}
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <button type="button" className="btn btn-danger">
                Dessert
              </button>
            </div>
          </div>
          <div class="cardc col-md-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                height={300}
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <button type="button" className="btn btn-danger">
                Salads
              </button>
            </div>
          </div>
          <div class="cardc col-md-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1504937551116-cb8097e6f02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwYml0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                height={300}
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <button type="button" className="btn btn-danger">
                Light Bites
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
