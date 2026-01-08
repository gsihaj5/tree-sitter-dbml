/**
 * @file DBML Parser
 * @author Gerry Sihaj <gsihaj5@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "dbml",

  extras: ($) => [/\s+/, $.comment],

  rules: {
    // Entry point
    source_file: ($) =>
      repeat(choice($.table_definition, $.ref_definition, $.enum_definition)),

    // --------------------------------------------------
    // Comments
    // --------------------------------------------------
    comment: (_) => token(choice(/\/\/.*/, /#.*/)),

    // --------------------------------------------------
    // Table
    // --------------------------------------------------
    table_definition: ($) =>
      seq(
        "Table",
        field("name", $.identifier),
        "{",
        repeat($.column_definition),
        "}",
      ),

    // --------------------------------------------------
    // Column
    // --------------------------------------------------
    column_definition: ($) =>
      seq(
        field("name", $.identifier),
        field("type", $.identifier),
        optional($.attribute_block),
      ),

    // --------------------------------------------------
    // Attributes  [pk, unique, not null]
    // --------------------------------------------------
    attribute_block: ($) => seq("[", commaSep1($.attribute), "]"),

    attribute: ($) => choice($.attribute_keyword, $.inline_ref),

    attribute_keyword: ($) => choice("pk", "unique", "increment", "not null"),

    inline_ref: ($) =>
      seq(
        choice("Ref", "ref"),
        ":",
        optional(/\s*/),
        field("direction", choice(">", "<", "-")),
        optional(/\s*/),
        field("target_table", $.ref_path),
      ),

    // --------------------------------------------------
    // Ref
    // --------------------------------------------------
    ref_definition: ($) =>
      seq(
        choice("Ref", "ref"),
        ":",
        field("from", $.ref_path),
        field("op", choice(">", "<", "-")),
        field("to", $.ref_path),
      ),

    ref_path: ($) => seq($.identifier, ".", $.identifier),

    // --------------------------------------------------
    // Enum (optional but useful)
    // --------------------------------------------------
    enum_definition: ($) =>
      seq("Enum", field("name", $.identifier), "{", repeat($.enum_value), "}"),

    enum_value: ($) => seq($.identifier, optional(",")),

    // --------------------------------------------------
    // Identifiers
    // --------------------------------------------------
    identifier: (_) => /[A-Za-z_][A-Za-z0-9_]*/,
  },
});

// --------------------------------------------------
// Helpers
// --------------------------------------------------
function commaSep1(rule) {
  return seq(rule, repeat(seq(",", rule)));
}
