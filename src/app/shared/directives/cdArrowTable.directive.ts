import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

declare var jQuery: any;

// tslint:disable-next-line:directive-selector
@Directive({
  selector: '[cdArrowTable]',
  providers: [HotkeysService],
  exportAs: 'cdArrowTable'
})
// tslint:disable-next-line:class-name
export class cdArrowTable implements OnDestroy {
  constructor(
    private _hotkeysService: HotkeysService,
    public element: ElementRef
  ) {
    this.hotKeyConfig();
  }
  private _selectedIndex;
  private _collection;
  @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEnter: EventEmitter<any> = new EventEmitter<any>();

  @Input() set collection(value: any) {
    this._collection = value;
    const newValue = value.length;
    this.selectedIndex > newValue - 1
      ? (this.selectedIndex = newValue - 1)
      : (this.selectedIndex = 0);
  }

  @Input() set selectedIndex(value: any) {
    this._selectedIndex = value;
  }

  @Input() disabledKey;

  ngOnDestroy() {
    this.resetKeys();
  }

  resetKeys() {
    const keys = Array.from(this._hotkeysService.hotkeys);
    keys.map(key => {
      this._hotkeysService.remove(key);
    });
  }

  reInitKey(keys?) {
    this._hotkeysService.add(keys || []);
  }

  getKeys() {
    return Array.from(this._hotkeysService.hotkeys);
  }

  hotKeyConfig() {
    this._hotkeysService.add(
      new Hotkey(
        'up',
        (event: KeyboardEvent): boolean => {
          if (this._selectedIndex === 0 || this.disabledKey) {
            return;
          }
          this._selectedIndex--;
          this.selectedIndexChange.emit(this._selectedIndex);
        },
        undefined,
        'Up'
      )
    );

    this._hotkeysService.add(
      new Hotkey(
        'down',
        (event: KeyboardEvent): boolean => {
          if (
            this._collection.length === 0 ||
            this._selectedIndex === this._collection.length - 1 ||
            this.disabledKey
          ) {
            return;
          }
          this._selectedIndex++;
          this.selectedIndexChange.emit(this._selectedIndex);
        },
        undefined,
        'Down'
      )
    );

    this._hotkeysService.add(
      new Hotkey(
        'space',
        (event: KeyboardEvent): boolean => {
          if (this._selectedIndex >= 0) {
            this.onEnter.emit(this._selectedIndex);
            return false;
          }
        },
        undefined,
        'Select'
      )
    );
  }
}
