import {Component, EventEmitter, Output, Input} from '@angular/core';
import {PolymerElement} from '@vaadin/angular2-polymer';

@Component({
  selector: 'search-filters',
  templateUrl: './app/search-filters/search_filters.component.html',
  styleUrls: ['./app/search-filters/search_filters.component.css'],
  directives: [PolymerElement('vaadin-combo-box'), PolymerElement('vaadin-date-picker')]
})

export class SearchFilters {

  filters: any = {};

  @Output() filtersChange = new EventEmitter();

  @Input() merchants: string[];

  activeFilterCount = 0;

  private updateStatus(e) {
    const status = e.target.name;
    const toggle = e.target.checked;

    if (!this.filters.statuses) {
      this.filters.statuses = [];
    }

    if (toggle) {
      this.filters.statuses.push(status)
    } else {
      this.filters.statuses.splice(this.filters.statuses.indexOf(status), 1);
    }
  }

  private filtersChanged() {
    this.filtersChange.emit(this.filters);

    // Count active filters.
    this.activeFilterCount = ['after', 'before', 'merchant', 'min', 'max', 'statuses'].filter((field) => {
      return this.filters[field] && this.filters[field].length > 0;
    }).length;
  }
}
