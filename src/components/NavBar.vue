<template>
    <div>
        <div class="home">

      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
            
            <router-link to="/" 
                class="navbar-brand"> 
                <img src="../assets/logo.png" 
                alt="Logo" width="50" id="logo">
            </router-link>
         
         
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
           
            

          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/formation" class="nav-link active" aria-current="page"> Formation </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/texts" class="nav-link" > Textes officiels </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" > Contact </router-link>
              </li>
              
              <!-- 
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li> -->
              <!-- 
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >Disabled</a
                >
              </li>
            -->
                
            </ul>
            <div class="connection lg-align-self-end">
                    <router-link to="/login" class="nav-link connection" > 
                    <button class="btn btn-primary btn-sm"> Se connecter </button>  </router-link>
                </div>    
                
            
            <!-- 
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            -->
            

          </div>
          
        </div>
      </nav>
    </div>
    </div>
</template>