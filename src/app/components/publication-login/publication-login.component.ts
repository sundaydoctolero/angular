import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { DownloadService } from '../../services/download.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';


@Component({
  selector: 'app-publication-login',
  templateUrl: './publication-login.component.html',
  styleUrls: ['./publication-login.component.css']
})
export class PublicationLoginComponent implements OnInit {

  public error = null;

  public form = {
    publication_name: null,
    publication_date: null
  }

  public publications = null;



  constructor(
    private Publication: PublicationService,
    private Download: DownloadService,
    private router: Router,
    private notify: SnotifyService
  ) { }

  ngOnInit( ) {
    this.getPublications();
    this.removePublicationDetails();
  }

  getPublications(){
    this.Publication.getPublications().subscribe(
      data => this.populatePubOptions(data),
      error => console.log(error)
    );
  }

  populatePubOptions(data){
    return this.publications = data;
  }

  onSubmit(){
    this.Download.getDownload(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    console.log(data);
    if(data){
      this.setPublicationDetails(data);
      this.router.navigateByUrl('dataentry');
    } 
  }

  handleError(error){
    this.notify.error(error.error.error);
  }

  setPublicationDetails(data){
    localStorage.setItem('publication_details',JSON.stringify(data))
  }

  removePublicationDetails(){
    localStorage.removeItem('publication_details');
  }


}
