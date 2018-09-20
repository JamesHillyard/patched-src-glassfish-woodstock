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

package com.sun.webui.jsf.component;

import com.sun.rave.designtime.DesignBean;
import com.sun.rave.designtime.DesignProperty;
import com.sun.rave.designtime.faces.FacesDesignContext;
import com.sun.webui.jsf.component.util.DesignMessageUtil;
import com.sun.rave.designtime.Result;
import com.sun.webui.jsf.design.AbstractDesignInfo;

/**
 * DesignInfo for the {@link com.sun.webui.jsf.component.EditableList} component.
 *
 * @author gjmurphy
 */
public class EditableListDesignInfo extends EditableValueHolderDesignInfo {
    
    public EditableListDesignInfo() {
        super(EditableList.class);
    }

    protected DesignProperty getDefaultBindingProperty(DesignBean bean) {
        return bean.getProperty("list"); //NOI18N
    }

    public Result beanCreatedSetup(DesignBean bean) {
        super.beanCreatedSetup(bean);
        
        FacesDesignContext context = (FacesDesignContext) bean.getDesignContext();
        
        DesignProperty fieldLabel = bean.getProperty("fieldLabel"); // NOI18N
        fieldLabel.setValue(DesignMessageUtil.getMessage(EditableListDesignInfo.class, "EditableList.fieldLabel")); // NOI18N
        
        DesignProperty listLabel = bean.getProperty("listLabel"); // NOI18N
        listLabel.setValue(DesignMessageUtil.getMessage(EditableListDesignInfo.class, "EditableList.listLabel")); //NOI18N
        
        return Result.SUCCESS;
    }
    
    /**
     * EditableList component doesn't need to support the "autosubmit" behavior,
     * so disabling the default behavior.
     *
     * @param bean <code>DesignBean</code> for the newly created instance 
     *
     */
    
     public boolean supportsAutoSubmit(DesignBean bean) {
         return false;
    }
}
