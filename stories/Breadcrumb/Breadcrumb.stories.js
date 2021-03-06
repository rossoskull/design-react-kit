import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Breadcrumb, BreadcrumbItem } from "../../src";

import Esempi from "./Esempi.md";
import Icone from "./Icone.md";
import Background from "./Background.md";

const stories = storiesOf("Componenti/Breadcrumb", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <section>
        <nav className="breadcrumb-container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Subsection<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>

        <nav className="breadcrumb-container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home<span className="separator">&gt;</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Subsection<span className="separator">&gt;</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    </section>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const IconeComponent = () => (
    <section>
        <nav className="breadcrumb-container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <a href="#">
                        Home<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <a href="#">
                        Subsection<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <i className="it-favorite" />
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    </section>
);
stories.add("Con icone", withDocs(Icone, withInfo()(IconeComponent)));

const BackgroundComponent = () => (
    <section>
        <nav className="breadcrumb-container">
            <Breadcrumb className="dark">
                <BreadcrumbItem>
                    <a href="#">
                        Home<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Subsection<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>

        <nav className="breadcrumb-container">
            <Breadcrumb className="dark">
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <a href="#">
                        Home<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <a href="#">
                        Subsection<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <i className="it-favorite" />
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>

        <nav className="breadcrumb-container">
            <Breadcrumb className="dark">
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <a href="#">
                        Home<span className="separator">&gt;</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <a href="#">
                        Subsection<span className="separator">&gt;</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <i className="it-favorite" />
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    </section>
);
stories.add(
    "Su sfondo scuro",
    withDocs(Background, withInfo()(BackgroundComponent))
);
