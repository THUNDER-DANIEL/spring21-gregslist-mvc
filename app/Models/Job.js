
export default class Job {
    constructor({ company, description, jobTitle, hours,rate, id }) {
      // NOTE it is no longer our job to generate Id's
      this.company = company
      this.jobTitle = jobTitle
      this.hours = hours
      this.rate = rate
      this.description = description
      this.id = id

    }



    get Template() {
      return `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
            <img class="card-img-top" src="${this.company}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.jobTitle} | ${this.hours} | ${this.rate}</h4>
                <p class="card-text">${this.description} - </p>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
                <button type="button" class="btn btn-info" onclick="app.jobsController.bid('${this.id}')">Bid</button>
            </div>
        </div>
      </div>
      `
    }
  }
  
  