/*
 * Copyright (c) 2018 Oracle and/or its affiliates. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0, which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the
 * Eclipse Public License v. 2.0 are satisfied: GNU General Public License,
 * version 2 with the GNU Classpath Exception, which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

dojo.provide("webui.@THEME@.widget.button");

dojo.require("dojo.widget.*");
dojo.require("webui.@THEME@.*");
dojo.require("webui.@THEME@.widget.*");

/**
 * This function will be invoked when creating a Dojo widget. Please see
 * webui.@THEME@.widget.button.setProps for a list of supported
 * properties.
 *
 * Note: This is considered a private API, do not use.
 */
webui.@THEME@.widget.button = function() {
    this.widgetType = "button";
    dojo.widget.Widget.call(this);

    /**
     * This function is used to generate a template based widget.
     */
    this.fillInTemplate = function() {
        // Set public functions. Note: Except for update, all are deprecated.
        this.domNode.isSecondary = webui.@THEME@.button.isSecondary;
        this.domNode.setSecondary = webui.@THEME@.button.setSecondary;
        this.domNode.isPrimary = webui.@THEME@.button.isPrimary;
        this.domNode.setPrimary = webui.@THEME@.button.setPrimary;
        this.domNode.isMini = webui.@THEME@.button.isMini;
        this.domNode.setMini = webui.@THEME@.button.setMini;
        this.domNode.getDisabled = webui.@THEME@.button.getDisabled;
        this.domNode.setDisabled = webui.@THEME@.button.setDisabled;
        this.domNode.getVisible = webui.@THEME@.button.getVisible;
        this.domNode.setVisible = webui.@THEME@.button.setVisible;
        this.domNode.getText = webui.@THEME@.button.getText;
        this.domNode.setText = webui.@THEME@.button.setText;
        this.domNode.doClick = webui.@THEME@.button.click;
        this.domNode.setProps = webui.@THEME@.widget.button.setProps;

        // Set private functions (private functions/props prefixed with "_").
        this.domNode._getClassName = webui.@THEME@.widget.button.getClassName;
        this.domNode._onblur = webui.@THEME@.button.onblur;
        this.domNode._onfocus = webui.@THEME@.button.onfocus;
        this.domNode._onmouseover = webui.@THEME@.button.onmouseover;
        this.domNode._onmouseout = webui.@THEME@.button.onmouseout;

        // Set events.
        dojo.event.connect(this.domNode, "onblur",
            webui.@THEME@.widget.button.createOnBlurCallback(this.id));
        dojo.event.connect(this.domNode, "onfocus",
            webui.@THEME@.widget.button.createOnFocusCallback(this.id));
        dojo.event.connect(this.domNode, "onmouseout",
            webui.@THEME@.widget.button.createOnMouseOutCallback(this.id));
        dojo.event.connect(this.domNode, "onmouseover",
            webui.@THEME@.widget.button.createOnMouseOverCallback(this.id));

        // Set properties.
        this.domNode.setProps({
            alt: this.alt,
            align: this.align,
            className: this.className,
            contents: this.contents,
            dir: this.dir,
            disabled: (this.disabled != null) ? this.disabled : false,
            id: this.id,
            lang: this.lang,
            mini: (this.mini != null) ? this.mini : false,
            name: this.name,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onDblClick: this.onDblClick,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            onKeyUp: this.onKeyUp,
            onMouseDown: this.onMouseDown,
            onMouseOut: this.onMouseOut,
            onMouseOver: this.onMouseOver,
            onMouseUp: this.onMouseUp,
            onMouseMove: this.onMouseMove,
            primary: (this.primary != null) ? this.primary : false,
            style: this.style,
            tabIndex: this.tabIndex,
            templatePath: this.templatePath,
            title: this.title,
            type: this.type,
            value: this.value,
            visible: this.visible
        });
        return true;
    }
}

/**
 * Helper function to create callback for onBlur event.
 *
 * @param id The HTML element id used to invoke the callback.
 */
webui.@THEME@.widget.button.createOnBlurCallback = function(id) {
    if (id != null) {
        // New literals are created every time this function
        // is called, and it's saved by closure magic.
        return function(evt) { 
            document.getElementById(id)._onblur();
        };
    }
}

/**
 * Helper function to create callback for onFocus event.
 *
 * @param id The HTML element id used to invoke the callback.
 */
webui.@THEME@.widget.button.createOnFocusCallback = function(id) {
    if (id != null) {
        // New literals are created every time this function
        // is called, and it's saved by closure magic.
        return function(evt) { 
            document.getElementById(id)._onfocus();
        };
    }
}

/**
 * Helper function to create callback for onMouseOut event.
 *
 * @param id The HTML element id used to invoke the callback.
 */
webui.@THEME@.widget.button.createOnMouseOutCallback = function(id) {
    if (id != null) {
        // New literals are created every time this function
        // is called, and it's saved by closure magic.
        return function(evt) { 
            document.getElementById(id)._onmouseout();
        };
    }
}

/**
 * Helper function to create callback for onMouseOver event.
 *
 * @param id The HTML element id used to invoke the callback.
 */
webui.@THEME@.widget.button.createOnMouseOverCallback = function(id) {
    if (id != null) {
        // New literals are created every time this function
        // is called, and it's saved by closure magic.
        return function(evt) { 
            document.getElementById(id)._onmouseover();
        };
    }
}

/**
 * Helper function to obtain widget class names.
 */
webui.@THEME@.widget.button.getClassName = function() {
    // To Do: The this.mydisabledcheck is just a hack so I can use the old button JS for now...
    var className = null;
    if (this._props.mini == true && this._props.primary == true) {
        className = (this.disabled == true || this.mydisabled == true)
            ? webui.@THEME@.widget.props.button.primaryMiniDisabledClassName
            : webui.@THEME@.widget.props.button.primaryMiniClassName;
    } else if (this._props.mini == true) {
        className = (this.disabled == true || this.mydisabled == true)
            ? webui.@THEME@.widget.props.button.secondaryMiniDisabledClassName
            : webui.@THEME@.widget.props.button.secondaryMiniClassName;
    } else if (this._props.primary == true) {
        className = (this.disabled == true || this.mydisabled == true)
            ? webui.@THEME@.widget.props.button.primaryDisabledClassName
            : webui.@THEME@.widget.props.button.primaryClassName;
    } else {
        className = (this.disabled == true || this.mydisabled == true)
            ? webui.@THEME@.widget.props.button.secondaryDisabledClassName
            : webui.@THEME@.widget.props.button.secondaryClassName;
    }
    return (this._props.className) 
        ? className + " " + this._props.className
        : className;
}

/**
 * This function is used to set widget properties with the
 * following Object literals.
 *
 * <ul>
 *  <li>alt</li>
 *  <li>align</li>
 *  <li>className</li>
 *  <li>contents</li>
 *  <li>dir</li>
 *  <li>disabled</li>
 *  <li>id</li>
 *  <li>lang</li>
 *  <li>mini</li>
 *  <li>name</li>
 *  <li>onBlur</li>
 *  <li>onClick</li>
 *  <li>onDblClick</li>
 *  <li>onFocus</li>
 *  <li>onKeyDown</li>
 *  <li>onKeyPress</li>
 *  <li>onKeyUp</li>
 *  <li>onMouseDown</li>
 *  <li>onMouseOut</li>
 *  <li>onMouseOver</li>
 *  <li>onMouseUp</li>
 *  <li>onMouseMove</li>
 *  <li>primary</li>
 *  <li>style</li>
 *  <li>tabIndex</li>
 *  <li>title</li>
 *  <li>type</li>
 *  <li>value</li>
 *  <li>visible</li>
 * </ul>
 *
 * @param props Key-Value pairs of properties.
 */
webui.@THEME@.widget.button.setProps = function(props) {
    if (props == null) {
        return false;
    }

    // Save properties for later updates.
    if (this._props) {
        Object.extend(this._props, props); // Override existing values, if any.
    } else {
        this._props = props;
    }

    // To Do: The following is just a hack so I can use the old button JS for now...
    this.classNamePrimary = webui.@THEME@.widget.props.button.primaryClassName;
    this.classNamePrimaryDisabled = webui.@THEME@.widget.props.button.primaryDisabledClassName;
    this.classNamePrimaryHov = webui.@THEME@.widget.props.button.primaryHovClassName;
    this.classNamePrimaryMini = webui.@THEME@.widget.props.button.primaryMiniClassName;
    this.classNamePrimaryMiniDisabled = webui.@THEME@.widget.props.button.primaryMiniDisabledClassName;
    this.classNamePrimaryMiniHov = webui.@THEME@.widget.props.button.primaryMiniHovClassName;
    this.classNameSecondary = webui.@THEME@.widget.props.button.secondaryClassName;
    this.classNameSecondaryDisabled = webui.@THEME@.widget.props.button.secondaryDisabledClassName;
    this.classNameSecondaryHov = webui.@THEME@.widget.props.button.secondaryHovClassName;
    this.classNameSecondaryMini = webui.@THEME@.widget.props.button.secondaryMiniClassName;
    this.classNameSecondaryMiniDisabled = webui.@THEME@.widget.props.button.secondaryMiniDisabledClassName;
    this.classNameSecondaryMiniHov = webui.@THEME@.widget.props.button.secondaryMiniHovClassName;
    this.mini = this._props.mini;
    this.mydisabled = this._props.disabled;
    this.primary = this._props.primary;
    this.secondary = !this.primary;

    // Set DOM node properties.
    webui.@THEME@.widget.common.setCoreProperties(this, props);
    webui.@THEME@.widget.common.setJavaScriptProperties(this, props);

    if (props.alt) { this.setAttribute("alt", props.alt); }
    if (props.align) { this.setAttribute("align", props.align); }
    if (props.dir) { this.setAttribute("dir", props.dir); }
    if (props.disabled != null) { this.disabled = props.disabled; }
    if (props.name) { this.setAttribute("name", props.name); }
    if (props.value) { this.setAttribute("value", props.value); }
    this.setAttribute("type", props.type ? props.type : "submit");

    // Set style class.
    webui.@THEME@.common.addStyleClass(this, this._getClassName());

    // Set contents.
    if (props.contents) {
        webui.@THEME@.widget.common.addFragment(this, props.contents);
    }
    return true;
}

dojo.inherits(webui.@THEME@.widget.button, dojo.widget.HtmlWidget);

//-->
