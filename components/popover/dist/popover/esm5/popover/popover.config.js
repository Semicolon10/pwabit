/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: Injectable }
    ];
    return PopoverConfig;
}());
export { PopoverConfig };
if (false) {
    /**
     * sets disable adaptive position
     * @type {?}
     */
    PopoverConfig.prototype.adaptivePosition;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
     * @type {?}
     */
    PopoverConfig.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    PopoverConfig.prototype.triggers;
    /** @type {?} */
    PopoverConfig.prototype.outsideClick;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     */
    PopoverConfig.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L3BvcG92ZXIvcG9wb3Zlci8iLCJzb3VyY2VzIjpbInBvcG92ZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBUTNDO0lBQUE7Ozs7UUFHRSxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7Ozs7UUFJeEIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFLbEIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUVuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUt2QixDQUFDOztnQkFuQkEsVUFBVTs7SUFtQlgsb0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxhQUFhOzs7Ozs7SUFFeEIseUNBQXdCOzs7OztJQUl4QixrQ0FBa0I7Ozs7OztJQUtsQixpQ0FBbUI7O0lBRW5CLHFDQUFxQjs7Ozs7SUFJckIsa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFBvcG92ZXIgZGlyZWN0aXZlLlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZVxuICogdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpbiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlXG4gKiBwb3BvdmVycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb25maWcge1xuICAvKiogc2V0cyBkaXNhYmxlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIGFkYXB0aXZlUG9zaXRpb24gPSB0cnVlO1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJhdXRvXCJcbiAgICovXG4gIHBsYWNlbWVudCA9ICd0b3AnO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgdHJpZ2dlcnMgPSAnY2xpY2snO1xuXG4gIG91dHNpZGVDbGljayA9IGZhbHNlO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICovXG4gIGNvbnRhaW5lcjogc3RyaW5nO1xufVxuIl19