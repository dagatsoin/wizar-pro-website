declare module "jss" {
  import * as CSS from 'csstype'
  interface Jss {
    setup: (args: any) => void 
    createStyleSheet: (styles: StyleObject, options?: StyleSheetFactoryOptions) => StyleSheet
    createRule(style: JssStyle): Rule
  }

  export type StyleObject = { [ key in string ]: CSS.Properties<string | number> }

  export type ToCssOptions = {
    indent?: number;
  }

  export type generateClassName = (rule: Rule, sheet?: StyleSheet) => string

  export type JssStyle = object | string | object[] | CSS.Properties<string | number>

  export type RuleOptions = {
    className?: string;
    selector?: string;
    generateClassName?: generateClassName;
    Renderer?: (args: any) => void ;
    index?: number;
    virtual?: boolean;
    classes?: object;
    jss?: Jss;
    sheet?: StyleSheet;
  }

  export type RulesContainerOptions = {
    classes: object;
    generateClassName: generateClassName;
    Renderer: (args: any) => void ;
    jss: Jss;
    sheet: StyleSheet;
    parent: any; // ConditionalRule|KeyframeRule|StyleSheet
  }

  export interface Rule {
    type: string
    name?: string
    selector: string
    style: JssStyle
    renderable?: CSSStyleRule
    options: RuleOptions
    isProcessed?: boolean
    applyTo(element: HTMLElement): void
    prop(name: string, value?: string): any // RegularRule|string;
    toString(options?: ToCssOptions): string
  }

  export type Plugin = {
    onCreateRule?: (name: string, decl: JssStyle, options: RuleOptions) => Rule | null;
    onProcessRule?: (rule: Rule, sheet?: StyleSheet) => void;
    onProcessStyle?: (style: JssStyle, rule: Rule, sheet?: StyleSheet) => JssStyle;
    onProcessSheet?: (sheet?: StyleSheet) => void;
    onChangeValue?: (value: string, prop: string, rule: Rule) => string;
  }

  export type JssOptions = {
    generateClassName?: generateClassName;
    plugins?: Plugin[];
    insertionPoint?: string;
  }

  export type StyleSheetOptions = {
    media?: string;
    meta?: string;
    index?: number;
    insertionPoint?: string;
    link?: boolean;
    element?: HTMLStyleElement;
    virtual?: boolean;
    Renderer?: (args: any) => void ;
    generateClassName?: generateClassName;
    jss: Jss;
  }

  export type StyleSheetFactoryOptions = {
    media?: string;
    meta?: string;
    index?: number;
    insertionPoint?: string;
    link?: boolean;
    element?: HTMLStyleElement;
    virtual?: boolean;
    Renderer?: (args: any) => void ;
    generateClassName?: generateClassName;
    jss?: Jss;
  }

  export type InternalStyleSheetOptions = {
    media?: string;
    meta?: string;
    index: number;
    insertionPoint: string;
    link?: boolean;
    element?: HTMLStyleElement;
    virtual?: boolean;
    Renderer: (args: any) => void ;
    generateClassName: generateClassName;
    jss: Jss;
    sheet: StyleSheet;
    parent: any; // ConditionalRule|KeyframeRule|StyleSheet,
    classes: object;
  }

  export interface Renderer {
    setStyle(rule: HTMLElement | CSSStyleRule, prop: string, value: string): boolean
    getStyle(rule: HTMLElement | CSSStyleRule, prop: string): string
    setSelector(rule: CSSStyleRule, selectorText: string): boolean
    getSelector(rule: CSSStyleRule): string
    attach(): void
    detach(): void
    deploy(sheet: StyleSheet): void
    insertRule(rule: Rule): CSSStyleRule | false
    deleteRule(rule: CSSStyleRule): boolean
    getRules(): CSSRuleList | void
  }

  interface StyleSheet {
    attached: boolean
    deployed: boolean
    linked: boolean
    classes: object
    options: StyleSheetOptions

    attach(): StyleSheet
    detach(): StyleSheet
    addRule(name: string, decl: JssStyle, options?: RuleOptions): Rule
    insertRule(rule: Rule): void
    addRules(styles: object, options?: RuleOptions): Rule[]
    getRule(name: string): Rule
    deleteRule(name: string): Rule
    indexOf(rule: Rule): number
    deploy(): StyleSheet
    link(): StyleSheet
    update(name?: string, data?: object): StyleSheet
    toString(options?: ToCssOptions): string
  }

  export const jss: Jss

  export default jss
}

declare module "jss-preset-default" {
  const preset: (args: any) => void 
  export default preset
}
