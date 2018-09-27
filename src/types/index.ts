import { LintRule } from './lintRules';
import { ValidationRule } from './validationRules';
import { RuleCategory, RuleSeverity } from './rule';

export type TargetFormat = 'oas2' | 'oas3';
export type Rule = ValidationRule | LintRule;

export interface IRuleMetadata {
  /**
   * The kebab-case name of the rule.
   */
  name: string;

  /**
   * A short, one line description of what the rule does.
   */
  description: string;

  /**
   * The formats this rule applies to
   */
  formats: TargetFormat[];

  /**
   * The type of rule
   */
  type: RuleCategory;

  /**
   * The JSON path within the format object (oas, etc) on which this rule
   * applies
   */
  objPath: string;
}

export interface IRuleResult {
  /**
   * The category of the rule (ie, validation, lint)
   */
  category: RuleCategory;

  /**
   * The relevant path within the object being operated on
   */
  path: (string | number)[];

  /**
   * The rule emitting the result
   */
  name: string;

  /**
   * The rule summary for the rule generating the result
   */
  description: string;

  /**
   * The rule emitting the result
   */
  severity: RuleSeverity;

  /**
   * Message describing the error
   */
  message: string;
}

export interface IRuleConfig {
  rules: IRuleStore;
}

export interface IRuleStore {
  [formatRegex: string]: IRuleDeclaration;
}

export interface IRuleDeclaration {
  [ruleName: string]: Rule;
}

export * from './lintRules';
export * from './validationRules';
export * from './rule';
