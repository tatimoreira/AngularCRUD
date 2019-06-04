import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  uri = 'http://localhost:4000/candidate';

  constructor(private http: HttpClient) { }

  addCandidate(person_name, job, resume) {
    const obj = {
      person_name: person_name,
      job: job,
      resume: resume
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getCandidates() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editCandidate(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateCandidate(person_name, job, resume, id) {

    const obj = {
      person_name: person_name,
      job: job,
      resume: resume
    };

    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCandidate(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }

}
