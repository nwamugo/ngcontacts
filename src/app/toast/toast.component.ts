import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Contact } from '../shared/models/contact.model';
import { ContactService } from '../shared/services/contact.service';
declare var window: any;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  constructor(private contactService: ContactService) {
    this.contactService.onCreateContact
    .pipe(takeUntil(this.destroy$))
    .subscribe((contact: Contact) => {
      const toast = new window.bootstrap.Toast(
        document.getElementById('liveToast')
      );
      toast.show()
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
