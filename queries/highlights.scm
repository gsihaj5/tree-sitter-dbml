;; ===============================
;; Top-level constructs
;; ===============================

(table_definition) @keyword
(ref_definition)   @keyword
(index_block)     @keyword

;; ===============================
;; Names
;; ===============================

(table_definition
  name: (identifier) @type)

(column_definition
  name: (identifier) @property
  type: (identifier) @type)

(ref_path
  (identifier) @type
  (identifier) @property)

;; ===============================
;; Attributes
;; ===============================

(attribute) @attribute

;; ===============================
;; Indexes
;; ===============================

(index_definition
  (identifier) @variable)

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
