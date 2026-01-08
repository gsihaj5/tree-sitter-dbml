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
        repeat(choice($.column_definition, $.index_block)),
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

    attribute: (_) =>
      choice("pk", "unique", "not", "null", "increment", "not null"),

    // --------------------------------------------------
    // Indexes
    // --------------------------------------------------
    index_block: ($) => seq("Indexes", "{", repeat($.index_definition), "}"),

    index_definition: ($) =>
      seq("(", commaSep1($.identifier), ")", optional($.attribute_block)),

    // --------------------------------------------------
    // Ref
    // --------------------------------------------------
    ref_definition: ($) =>
      seq(
        "Ref",
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
