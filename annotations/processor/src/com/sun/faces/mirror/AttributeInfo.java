/*
 * Copyright (c) 2007, 2018 Oracle and/or its affiliates. All rights reserved.
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

package com.sun.faces.mirror;

/**
 * Defines the basic metadata available for the JSP tag attribute that corresponds 
 * to a property. See {@link PropertyInfo#getAttribute}.
 *
 * @author gjmurphy
 */
public interface AttributeInfo {
    
    /**
     * This attribute's name, which is guaranteed to be unique among all attribute
     * names within the scope of the containing component. See 
     * {@link com.sun.faces.annotation.Attribute#name}.
     */
    public String getName();

    /**
     * Returns true if this attribute is required in the JSP. See 
     * {@link com.sun.faces.annotation.Attribute#isRequired}.
     */
    public boolean isRequired();
    
    /**
     * Returns true if this attribute is bindable. See 
     * {@link com.sun.faces.annotation.Attribute#isBindable}.
     */
    public boolean isBindable();
    
    /**
     * If this attribute corresponds to a property of type {@link javax.el.MethodExpression},
     * then this method will return the signature of the method to which the expression
     * should be bound.
     */
    public abstract String getMethodSignature();
    
    /**
     * Returns the description of this attribute, appropriate for use as a description
     * element in the taglib configuration. If no tag description was set, returns the
     * doc comment of this attribute's property.
     */
    public String getDescription();
    
    /**
     * Returns the name of the method used to set the attribute value in the tag
     * handler class.
     */
    public String getWriteMethodName();
    
}
