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
  name: (identifier) @property)

(column_definition
  type: (identifier) @type)

(ref_path
  (identifier) @variable)

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
