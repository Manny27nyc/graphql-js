import type { ASTVisitor } from '../../language/visitor';
import type { SDLValidationContext } from '../ValidationContext';
/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */
export function UniqueDirectiveNamesRule(
  context: SDLValidationContext,
): ASTVisitor;
