import React from "react";

export default function Cards(props) {
  console.log(props);
  return (
    <div class="container">
      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        style={{ width: "100%", paddingTop: "30px" }}
      >
        <div class="col">
          <div class="card h-100">
            <img src={props.item.urlToImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{props.item.title}</h5>
              <p class="card-text">{props.item.description}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">8 hours ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
