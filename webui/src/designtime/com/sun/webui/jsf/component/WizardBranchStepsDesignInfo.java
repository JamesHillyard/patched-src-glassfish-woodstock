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
import com.sun.rave.designtime.DesignContext;
import com.sun.rave.designtime.DesignProperty;
import com.sun.rave.designtime.Result;
import com.sun.webui.jsf.component.util.DesignUtil;
import com.sun.webui.jsf.design.AbstractDesignInfo;
import com.sun.webui.jsf.component.WizardBranch;
import com.sun.webui.jsf.component.WizardBranchSteps;

/**
 * DesignInfo for the WizardBranchSteps component.
 * 
 */
public class WizardBranchStepsDesignInfo extends AbstractDesignInfo {
    
    /** Creates a new instance of WizardBranchStepsDesignInfo */
    public WizardBranchStepsDesignInfo() {
        
        super(WizardBranchSteps.class);
        
    }
        
    public Result beanCreatedSetup(DesignBean bean) {
        super.beanCreatedSetup(bean);
        WizardBranchSteps wbs = (WizardBranchSteps) bean.getInstance();
        //check for the id, if its null then assign "wizardBranchSteps1" to it.
        if (wbs.getId() == null)
        wbs.setId("wizardBranchSteps1");
        
        return Result.SUCCESS;
    }
    
    public boolean acceptParent(DesignBean parentBean, DesignBean childBean, Class childClass) {
        // can only accept wizardBranch as parent.
        if (parentBean.getInstance().getClass().equals(WizardBranch.class))
            return true;
        return false;
    }
}
