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

package com.sun.faces.mirror.generator;

import com.sun.faces.mirror.DeclaredComponentInfo;
import java.util.Set;

/**
 * Base generator for the JSP tag library descriptor file.
 *
 * @author gjmurphy
 */
abstract public class TagLibFileGenerator extends FileGenerator {

    private Set<DeclaredComponentInfo> declaredComponentInfoSet;

    /**
     * Protected getter for property declaredComponentInfoSet.
     */
    protected Set<DeclaredComponentInfo> getDeclaredComponentInfoSet() {
        return this.declaredComponentInfoSet;
    }

    /**
     * Setter for property declaredComponentInfoSet.
     */
    public void setDeclaredComponentInfoSet(Set<DeclaredComponentInfo> declaredComponentInfoSet) {
        this.declaredComponentInfoSet = declaredComponentInfoSet;
    }
    
    private String namespace;

    /**
     * Protected getter for property namespace.
     */
    protected String getNamespace() {
        return this.namespace;
    }

    /**
     * Setter for property namespace.
     */
    public void setNamespace(String namespace) {
        this.namespace = namespace;
    }

    private String namespacePrefix;

    /**
     * Protected getter for property namespacePrefix.
     * @return Value of property namespacePrefix.
     */
    protected String getNamespacePrefix() {
        return this.namespacePrefix;
    }

    /**
     * Setter for property namespacePrefix.
     */
    public void setNamespacePrefix(String namespacePrefix) {
        this.namespacePrefix = namespacePrefix;
    }
    
}
