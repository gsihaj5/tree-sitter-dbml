;; ===============================
;; Top-level constructs
;; ===============================

(table_definition) @keyword
(ref_definition)   @keyword
(inline_ref) @keyword

;; ===============================
;; Names
;; ===============================

(table_definition
  name: (identifier) @type)

(column_definition
  name: (identifier) @property
  type: (type) @type)

;; ===============================
;; Attributes
;; ===============================

(attribute_keyword) @attribute
(attribute) @attribute

;; Inline ref
(inline_ref) @attribute
(inline_ref direction: (_) @operator)

(inline_ref
  target_table: (ref_path
    (identifier) @type
    (identifier) @property))

;; ===============================
;; Comments
;; ===============================

(comment) @comment

;; ===============================
;; Brackets / Delimiters (DBML)
;; ===============================

["{" "}"] @punctuation.bracket.dbml
["(" ")"] @punctuation.bracket.dbml
["[" "]"] @punctuation.bracket.dbml
