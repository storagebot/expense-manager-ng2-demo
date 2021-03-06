System.register(['@angular/core', '../expenses-list/expenses_list.component', '../overview-panel/overview_panel.component', '../expense-editor/expense_editor.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, expenses_list_component_1, overview_panel_component_1, expense_editor_component_1;
    var OverviewPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expenses_list_component_1_1) {
                expenses_list_component_1 = expenses_list_component_1_1;
            },
            function (overview_panel_component_1_1) {
                overview_panel_component_1 = overview_panel_component_1_1;
            },
            function (expense_editor_component_1_1) {
                expense_editor_component_1 = expense_editor_component_1_1;
            }],
        execute: function() {
            OverviewPage = (function () {
                function OverviewPage() {
                }
                OverviewPage = __decorate([
                    core_1.Component({
                        selector: 'overview-page',
                        templateUrl: './app/overview-page/overview_page.component.html',
                        directives: [expenses_list_component_1.ExpensesList, overview_panel_component_1.OverviewPanel, expense_editor_component_1.ExpenseEditor],
                        styles: ["\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n      }\n      .content {\n        display: flex;\n        flex: 1;\n      }\n      expenses-list {\n        flex: 1;\n      }\n      h1 {\n        font-weight: 300;\n      }\n      overview-panel {\n        width: 33%;\n        max-width: 300px;\n        background: #F2FAF9;\n        z-index: 1;\n      }\n      .toolbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 18px;\n        background: #37474F;\n        color: #fff;\n        height: 64px;\n      }\n      .toolbar img {\n        margin-left: 12px;\n      }\n      .toolbar span {\n        flex: 1;\n        text-align: right;\n        font-size: 14px;\n        color: #80cbc4;\n      }\n      paper-dialog {\n        display: block;\n        padding: 16px 32px;\n        border: 1px solid #ccc;\n        position: absolute;\n        top: 0;\n        margin: 0;\n        width: 80vw;\n        height: 100vh;\n      }\n      expense-editor {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        margin: 0 !important;\n        padding: 0 !important;\n      }\n      @media (max-width: 600px) {\n        paper-dialog {\n          width: 100vw;\n        }\n      }\n      @media (max-width: 960px) {\n        overview-panel {\n          display: none;\n        }\n      }\n      @media (max-width: 600px) {\n        h1 {\n          font-size: 18px;\n        }\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OverviewPage);
                return OverviewPage;
            })();
            exports_1("OverviewPage", OverviewPage);
        }
    }
});
//# sourceMappingURL=overview_page.component.js.map