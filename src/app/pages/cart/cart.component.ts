import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/service/cart/cart.service';
import { Icart } from '../../shared/interfaces/icart';
import { FlowbiteService } from '../../core/service/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit ,AfterViewInit {
  private readonly cartService = inject(CartService);

  cartDetails: Icart = {} as Icart;

  constructor(private flowbiteService: FlowbiteService) {}
  ngAfterViewInit(): void {
  this.flowbiteService.loadFlowbite(() => {
    initFlowbite();
  });
  }

  getCart(): void {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data;

        this.flowbiteService.loadFlowbite(() => {
          initFlowbite();
        });
      }
    });
  }

  removeItem(id: string): void {
    this.cartService.removeItem(id).subscribe({
      next: (res) => {
        this.cartDetails = res.data;

        this.flowbiteService.loadFlowbite(() => {
          initFlowbite();
        });
      }
    });
  }

  updateQuntatiy(id: string, count: number): void {
    this.cartService.updateCart(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  clear(): void {
    this.cartService.removeAll().subscribe({
      next: (res) => {
        this.cartDetails = {} as Icart;
      }
    });
  }

  trackById(index: number, item: any): string {
    return item.product._id;
  }

  ngOnInit(): void {
    this.getCart();
  }
}
